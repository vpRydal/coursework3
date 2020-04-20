<template>
    <div>
        <a v-b-modal.modal class="clickable btn-allete-1">Вход</a>
        <ValidationObserver v-slot="{ invalid }" ref="formObs">
            <b-modal id="modal"
                     size="sm"
                     title="Вход"
                     body-class="position-static"
                     @hide="resetModal"
                     @ok="handleOk"
                     :no-close-on-backdrop="modalNoHide"
                     :no-close-on-esc="modalNoHide"
            >
                <b-overlay :show="showOverlay" rounded="sm" class="rounded" no-wrap>
                </b-overlay>

                <b-alert :show="Boolean(badLogin)" variant="danger">
                    <h4 class="alert-heading">Ошибка аутентификации</h4>
                    <p>
                        {{ badLogin }}
                    </p>
                </b-alert>
                <b-form
                    fer="form"
                    @submit.stop.prevent="handleSubmit"
                >
                    <b-form-group
                        label-for="login"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="required|max:25|email"
                        >
                            <b-form-input
                                class="input-text-allete"
                                id="email"
                                v-model.trim="form.email"
                                :state="!dirty ? null: valid"
                                aria-describedby="invalid-feedback"
                                placeholder="Логин"
                            ></b-form-input>
                            <b-form-invalid-feedback id="invalid-feedback">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-form-group
                        label-for="password"
                    >
                        <ValidationProvider
                            v-slot="{ valid, errors, dirty }"
                            rules="required|max:20"
                        >
                            <b-form-input
                                placeholder="Пароль"
                                class="input-text-allete"
                                id="password"
                                v-model.trim="form.password"
                                type="password"
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
                    <b-button class="btn-allete" @click="ok()" :disabled="invalid">Войти</b-button>
                    <b-button class="btn-allete btn-allete-bad" @click="cancel()">Отмена</b-button>
                </template>
            </b-modal>
        </ValidationObserver>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                badLogin: false,
                showOverlay: false,
                modalNoHide: false,
                allowReset: true
            }
        },
        methods: {
            toggleOverlay() {
                this.showOverlay = !this.showOverlay;
                this.modalNoHide = this.showOverlay;
            },
            resetModal() {
                if (!this.allowReset) return

                this.form.email = '';
                this.form.password = '';
                this.badLogin = false;
                this.showOverlay = false;
                this.modalNoHide = false;
                this.$refs.formObs.reset();

            },
            handleOk(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.allowReset = false;

                this.handleSubmit()
            },
            handleSubmit() {
                this.$refs.formObs.validate().then(success => {
                    if (!success) return

                    this.$nextTick(() => {
                        this.login();
                    });
                })
            },
            login() {
                this.toggleOverlay();
                this.allowReset = true;
                axios
                    .get('/sanctum/csrf-cookie')
                    .then(_ => {
                        axios
                            .post('/api/auth/login', this.form)
                            .then(({data: {user}}) => {
                                this.$store.commit('auth/login', user);
                                this.toggleOverlay();
                                this.resetModal();
                                this.$bvModal.hide('modal');
                            }).catch(error => {
                            if (error.response.status === 422) {
                                this.toggleOverlay();
                                this.badLogin = 'Логин или пароль не правильный, исправьте их и повторите попытку';
                            }
                        })
                    })
            },
        },
    }
</script>

<style scoped>

</style>
