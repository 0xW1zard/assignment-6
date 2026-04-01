import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingBlock = ({ pricingData }) => {

    const data = use(pricingData);
    console.log(data);
    return (
        <div className='my-20 container mx-auto '>
            <div className='w-fit mx-auto text-center space-y-3 px-3'>
                <h2 className='text-5xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='flex justify-center gap-7 flex-wrap mt-6'>
            {
                data.map((plan, index) => <PricingCard key={index} plan={plan}></PricingCard>)
            }
            </div>
        </div>
    );
};

export default PricingBlock;