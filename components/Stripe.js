import { Stripe as StripeConfig } from '@/data/config';

export default function StripeSection() {
  return (
    <div className="bg-gray-900 text-white py-16 flex flex-wrap items-center">
      <div className="w-full">
        <img src={StripeConfig.gif} alt="Your GIF" className="w-full h-auto" />
      </div>
    </div>
  );
}