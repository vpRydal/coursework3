<template>
    <div>
        <a v-b-modal.modalRegister class="clickable btn-allete-1 mx-1">Регистрация</a>
        <ValidationObserver v-slot="{ invalid }" ref="formObs">
            <b-modal id="modalRegister"
                     title="Регистрация"
                     body-class="position-static"
                     @ok="handleOk"
                     @cancel="resetModal"
                     :no-close-on-backdrop="modalNoHide"
                     :no-close-on-esc="modalNoHide"
            >
                <b-overlay :show="showOverlay" rounded="sm" class="rounded" no-wrap></b-overlay>
                <b-alert :show="Boolean(badRegistration)" variant="danger">
                    <h4 class="alert-heading">Ошибка решистрации</h4>
                    <p>
                        {{ badRegistration }}
                    </p>
                </b-alert>
                <b-form
                    ref="form"
                    @submit.stop.prevent="handleSubmit"
                >
                    <b-form-group
                        label="Имя"
                        description="Это поле не обязательное"
                        label-for="name"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="max:20"
                        >
                            <b-form-input
                                id="name"
                                name="name"
                                type="text"
                                v-model.trim="form.name"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-form-group
                        label="Фамилия"
                        label-for="surname"
                        description="Это поле не обязательное"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="max:20|"
                        >
                            <b-form-input
                                id="surname"
                                name="surname"
                                type="text"
                                v-model.trim="form.second_name"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-form-group
                        label="Отчество"
                        label-for="patronymic"
                        description="Это поле не обязательное"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="max:20"
                        >
                            <b-form-input
                                id="patronymic"
                                name="patronymic"
                                type="text"
                                v-model.trim="form.patronymic"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-form-group
                        label="Email"
                        label-for="email"
                    >
                        <ValidationProvider
                            name="Email"
                            v-slot="{ valid, errors, dirty }"
                            rules="required|max:20|email|unique:user,email"
                        >
                            <b-form-input
                                id="email"
                                name="email"
                                type="email"
                                v-model.trim.lazy="form.email"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-form-group
                        label="Логин"
                        label-for="login"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="required|max:25|min:4|unique:user,login"
                        >
                            <b-form-input
                                id="login"
                                name="login"
                                type="text"
                                v-model.trim.lazy="form.login"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-form-group
                        label="Пароль"
                        label-for="password"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="required|max:25|min:6"
                            vid="password"
                        >
                            <b-form-input
                                id="password"
                                name="password"
                                type="password"
                                v-model.trim="form.password"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-form-group
                        label="Подтверждение пароля"
                        label-for="c_password"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="required|max:25|min:6|confirmed:password"
                        >
                            <b-form-input
                                id="c_password"
                                name="c_password"
                                type="password"
                                v-model.trim="form.c_password"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                </b-form>
                <template v-slot:modal-footer="{ ok, cancel }">
                    <b-button class="btn-allete" @click="ok()" :disabled="invalid">Регистрация</b-button>
                    <b-button class="btn-allete btn-allete-bad" @click="cancel()">Отмена</b-button>
                </template>
            </b-modal>
        </ValidationObserver>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                form: {
                    name: '',
                    second_name: '',
                    patronymic: '',
                    email: '',
                    login: '',
                    password: '',
                    c_password: '',
                },
                badRegistration: false,
                showOverlay: false,
                modalNoHide: false,
            }
        },
        methods: {
            ucFirst: value => value ? value[0].toUpperCase() + value.slice(1) : value,
            toggleOverlay() {
                this.showOverlay = !this.showOverlay;
                this.modalNoHide = this.showOverlay;
            },
            resetModal() {
                for (let fieldValue in this.form) {
                    this.form[fieldValue] = ''
                }
                this.badRegistration = false;
                this.showOverlay = false;
                this.modalNoHide = false;
                this.$refs.formObs.reset();
            },
            handleOk(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.handleSubmit()
            },
            handleSubmit() {
                this.$refs.formObs.validate().then(success => {
                    if (!success) {
                        return
                    }
                    this.$nextTick(() => {
                        this.register();
                    });
                })
            },
            register() {
                this.toggleOverlay();
                axios
                    .post('/api/auth/register', this.form)
                    .then(({data:{user}}) => {
                        this.$bvModal.hide('modal');
                        this.$store.commit('auth/login', user);
                        this.resetModal();
                        this.$bvModal.hide('modalRegister');
                        this.toggleOverlay();
                    })
                    .catch(error => {
                        console.error(error)
                        this.toggleOverlay();
                        this.badRegistration = 'Пожалуйста обратитесь в тех. поддержку';
                    })
            },
        },
        watch: {
            'form.name': function (value) {
                this.form.name = this.ucFirst(value);
            },
            'form.surname': function (value) {
                this.form.second_name = this.ucFirst(value);
            },
            'form.patronymic': function (value) {
                this.form.patronymic = this.ucFirst(value);
            },
        },
        computed: {}
    }
</script>

<style scoped>

</style>
