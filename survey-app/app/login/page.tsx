import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';

export default function Login() {
    return (
        <>
            <header className="max-w-lg mx-auto">
                <h1 className="text-4xl font-bold text-white text-center">
                    Вход
                </h1>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Добро пожаловать</h3>
                    <p className="text-gray-600 pt-2">Авторизируйтесь</p>
                </section>

                <section className="mt-5">
                    <form className="flex flex-col" method="POST" action="#">
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
                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                            >
                                Забыли пароль?
                            </a>
                        </div>
                        <Button
                            className="text-white font-bold py-2"
                            color="secondary"
                            radius="sm"
                            type="submit"
                        >
                            Войти
                        </Button>
                    </form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">
                    Не зарегистрированы?&nbsp;
                    <Link className="font-bold hover:underline" href="/signup">
                        Регистрация
                    </Link>
                    .
                </p>
            </div>
        </>
    );
}
