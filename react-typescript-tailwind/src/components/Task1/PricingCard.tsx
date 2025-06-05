import React from 'react';

interface Props {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<Props> = ({ plan, price, features, isFeatured = false }) => {
  return (
    <div 
      className={`
        w-full sm:w-80
        py-16 px-8 
        min-h-[500px]
        transition-all duration-200
        relative
        ${isFeatured 
          ? 'bg-slate-700 text-white transform scale-105 z-20' 
          : 'bg-white text-gray-800'
        }
        flex flex-col
      `}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{plan}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold">{price}</span>
        </div>
      </div>

      <div className={`w-full h-px ${isFeatured ? 'bg-gray-600' : 'bg-gray-200'}`}></div>

      <ul className="flex-grow py-8">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center justify-center text-center py-4">
              <span className={`${isFeatured ? 'text-gray-200' : 'text-gray-600'}`}>
                {feature}
              </span>
            </li>
            {index < features.length - 1 && (
              <div className={`w-full h-px ${isFeatured ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
            )}
          </React.Fragment>
        ))}
      </ul>

      <div className={`w-full h-px ${isFeatured ? 'bg-gray-600' : 'bg-gray-200'}`}></div>

      <div className="pt-8">
        <button
          className={`
            w-full py-3 px-6
            font-semibold uppercase text-sm
            transition-colors
            ${isFeatured 
              ? 'bg-white text-slate-700 hover:bg-gray-100' 
              : 'bg-slate-700 text-white hover:bg-slate-800'
            }
          `}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default PricingCard;