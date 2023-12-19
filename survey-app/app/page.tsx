'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Index() {
    const getTestData = async () => {
        try {
            const data = await fetch('http://localhost:3000/api').then((resp) =>
                resp.json()
            );
            console.log('Success', data);
        } catch (e) {
            console.log('Error', e);
        }
    };

    return (
        <>
            <Button color="secondary" onClick={() => getTestData()}>
                Push me
            </Button>
            <Link color="primary" href="/login">
                Login
            </Link>
        </>
    );
}
