import Image from 'next/image';
import mockUp from './assets/b-mockup.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div className="w-full max-w-50 flex-1">
        <h1 className="text-4xl font-bold py-4">Easy calorie tracking app</h1>
        <p>No more manual tracking, Nutrivo AI powered tracking gets to learn your habits</p>
      </div>
      <div className="w-full max-w-50 flex-1 py-4">
        <Image src={mockUp} alt="Phone image" width={500} height={500} />
      </div>
    </main>
  );
}
