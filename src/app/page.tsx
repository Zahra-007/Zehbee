import { redirect } from 'next/navigation';

export default function Home() {
    // Redirect the root path to the new main product landing page
    redirect('/compress-image-online');
}