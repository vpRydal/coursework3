<?php

namespace App\Http\Controllers\Admin\News;

use App\Http\Controllers\Admin\AdminController;
use App\Http\Requests\NewsRequest;
use App\Models\News;
use App\Repositories\NewsRepository;
use Auth;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;


use Image;
use Str;
use Symfony\Component\Console\Input\Input;


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
        $this->vars['newsPaginator'] = $this->newsRep->getNewsForTable();
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
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(NewsRequest $request)
    {
        $data = $request->all();

        if (empty($data['slug']))
            $data['slug'] = Str::slug($data['title']);
        $data['author_id'] = Auth::user()->id;

        $news = News::create($data);
        return redirect()->route('news.change', $data['slug']);

/*      dd($request->input('text'));
        $img = $request->file('img');
        $disk = Storage::disk('public');
        $img = Image::make($img)->resize(300, 300);

        $img->save('storage/files/images/news/test.jpg');*/
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
     * @return Response
     */
    public function edit(News $news)
    {
        dd($news);
        $this->template .= '.change';
        $this->vars['readonly'] = [
            'slug' => 'readonly',
        ];
        return $this->renderOutput();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  News  $news
     * @return Response
     */
    public function update(Request $request, News $news)
    {
        dd(__METHOD__);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param $id
     * @return void
     */
    public function destroy(Request $request, $id)
    {
        dd(__METHOD__);
    }
    public function multipleDestroy(Request $request)
    {
        $success = $this->newsRep->multipleDestroy($request);

        if ($success)
            return redirect()->back()->with('status', true);
        else

            return redirect()->back()->with('status', false);


    }
    public function upload(Request $request)
    {

        if($request->hasFile('upload')) {
            //get filename with extension
            $filenamewithextension = $request->file('upload')->getClientOriginalName();

            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);

            //get file extension
            $extension = $request->file('upload')->getClientOriginalExtension();

            //filename to store
            $filenametostore = $filename.'_'.time().'.'.$extension;

            //Upload File
            $request->file('upload')->storeAs('public/uploads', $filenametostore);

            $CKEditorFuncNum = $request->input('CKEditorFuncNum');
            $url = asset('storage/uploads/'.$filenametostore);
            $msg = 'Image successfully uploaded';
            $re = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";

            // Render HTML output
            @header('Content-type: text/html; charset=utf-8');
            echo $re;
        }
    }
}
