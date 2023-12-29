import Link from 'next/link';
import { Button, Input } from '@nextui-org/react';

export default function SingUp() {
    return (
        <>
            <header className="max-w-lg mx-auto">
                <h1 className="text-4xl font-bold text-white text-center">
                    Регистрация
                </h1>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <p className="text-gray-600">Введите свои учетные данные</p>
                </section>

                <section className="mt-5">
                    <form className="flex flex-col" method="POST" action="#">
                        <div className="mb-6 pt-3">
                            <Input
                                isRequired
                                radius="sm"
                                color="secondary"
                                type="text"
                                label="Фамилия"
                                className="w-full text-gray-700"
                            />
                        </div>
                        <div className="mb-6 pt-3">
                            <Input
                                isRequired
                                radius="sm"
                                color="secondary"
                                type="text"
                                label="Имя"
                                className="w-full text-gray-700"
                            />
                        </div>
                        <div className="mb-6 pt-3">
                            <Input
                                isRequired
                                radius="sm"
                                color="secondary"
                                type="text"
                                label="Отчество"
                                className="w-full text-gray-700"
                            />
                        </div>
                        <div className="mb-6 pt-3">
                            <Input
                                isRequired
                                radius="sm"
                                color="secondary"
                                type="email"
                                label="Email"
                                className="w-full text-gray-700"
                            />
                        </div>
                        <div className="mb-6 pt-3">
                            <Input
                                isRequired
                                radius="sm"
                                color="secondary"
                                type="password"
                                label="Пароль"
                                className="w-full text-gray-700"
                            />
                        </div>

                        <div className="mb-6 pt-3">
                            <Input
                                isRequired
                                radius="sm"
                                color="secondary"
                                type="password"
                                label="Повторить пароль"
                                className="w-full text-gray-700 focus:outline-none"
                            />
                        </div>

                        <Button
                            className="text-white font-bold py-2"
                            color="secondary"
                            radius="sm"
                            type="submit"
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">
                    Есть аккаунт?&nbsp;
                    <Link className="font-bold hover:underline" href="/login">
                        Войти
                    </Link>
                    .
                </p>
            </div>
        </>
    );
}
