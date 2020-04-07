<?php

namespace App\Http\Controllers\Admin\News;

use App\Http\Controllers\Admin\AdminController;
use App\Http\Requests\NewsRequest;
use App\Models\News;
use App\Repositories\NewsRepository;
use Auth;
use Carbon\Carbon;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

use Image;
use Str;

class NewsController extends AdminController
{
    public function __construct()
    {
        parent::__construct(new NewsRepository);
        $this->template = 'News';
    }
    /**
     * Display a listing of the resource.
     *
     * @return Factory|View
     */
    public function index()
    {
        $this->template .= '.index';
        $this->vars['newsPaginator'] = $this->newsRep->getNewsForTableWithPaginate();
        return $this->renderOutput();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Factory|View
     */

    public function create()
    {
        $this->template .= '.create';

        return $this->renderOutput();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewsRequest $request
     * @return RedirectResponse
     */
    public function store(NewsRequest $request)
    {
        $data = $request->all();
        if (empty($data['slug']))
            $data['slug'] = Str::slug($data['title']);
        $data['author_id'] = Auth::user()->id;
        $news = News::create($data);
        return redirect()->route('news.change', $news);
    }

    /**
     * Display the specified resource.
     *
     * @param News $news
     * @return Response
     */
    public function show(News $news)
    {
        dd(__METHOD__);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  News  $news
     * @return Factory|View
     */
    public function edit(News $news)
    {
        $this->template .= '.change';
        $this->vars['readonly'] = [
            'slug' => 'readonly',
        ];
        $this->vars['news'] = $news;

        return $this->renderOutput();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NewsRequest $request
     * @param News $news
     * @return RedirectResponse
     */
    public function update(NewsRequest $request, News $news)
    {
        $data = $request->all();
        $news->fill([
            'html_text' => $data['text'],
            'description' => $data['description'],
            'title' => $data['title'],
        ]);
        $isPublish = $request->input('is-publish');

        if ($isPublish && !$news->published_at) {

            $news->published_at = Carbon::now()->toDateTimeString();
        }

        if ($isPublish != null) {
            $news->is_published = 1;
        } else {
            $news->is_published = 0;
        }
        $img = $request->file('img');
        if (isset($img)) {
            $imgExtension = $img->extension();
            $img = Image::make($img);
            $disk = Storage::disk('public');
            $imgPath = $disk->path('files\images\news\\' . $news->slug . '\\');
            $imgName = Str::random(10);;
            $imgFullPath = $imgPath . $imgName . '.' . $imgExtension;

            $img->resize(300, 300);
            $img->save($imgFullPath);
            $news->img_preview = asset('storage\files\images\news\\'  . $news->slug . '\\' . $imgName . '.' . $imgExtension);
        }

        $news->update();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param News $news
     * @return void
     */
    public function destroy(Request $request, News $news)
    {
        News::destroy($news->id);
    }

    public function multipleDestroy(Request $request)
    {
        $success = $this->newsRep->multipleDestroy($request);

        if ($success)
            return redirect()->back()->with('status', true);
        else

            return redirect()->back()->with('status', false);


    }
    public function upload(Request $request, News $news)
    {
        if($request->hasFile('upload')) {
            //get filename with extension
            $filenamewithextension = $request->file('upload')->getClientOriginalName();

            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);

            //get file extension
            $extension = $request->file('upload')->getClientOriginalExtension();


            $disk = Storage::disk();
            $filePath= 'public/files/images/news/' . $news->slug;

            //Upload File
            $newNameAndPath = $disk->putFile($filePath, $request->file('upload'));
            $CKEditorFuncNum = $request->input('CKEditorFuncNum');
            $url = asset($disk->url($newNameAndPath));
            $msg = 'Изображение успешно загруженно';
            $re = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";

            // Render HTML output
            @header('Content-type: text/html; charset=utf-8');
            echo $re;
        }
    }
}
