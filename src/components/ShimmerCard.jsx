const ShimmerCard=()=>
{
    return new Array(20).fill(0).map((card)=>{
        return(
            <div className='w-full shadow-md  md:max-w-[250px] max-w[300px] rounded-[15px]'>
            <div className='w-full h-[150px] bg-[#f7f7f7] rounded-[15px]'>
                <div className='w-full h-full object-cover rounded-[15px]'/>
            </div>
           
            <div className='px-2'>
                <h2 className='font-semibold text-2xl h-8 w-full bg-[#f7f7f7] my-2'></h2>
                <div className="flex gap-2 my-2 justify-between">
                <h2 className='text-[16px] font-semibold h-4 w-24 bg-[#f7f7f7]'></h2>
                <h2 className='text-[16px] font-semibold h-4 w-24  bg-[#f7f7f7]'></h2>
                </div>
            </div>
            <p className='text-gray-500 px-3 h-4 w-11/12 mx-auto  bg-[#f7f7f7] my-2'></p>
            <p className='text-gray-500 px-3 h-4 w-11/12 mx-auto  bg-[#f7f7f7] my-2'></p>
        </div>  
        )
    })

        
       
}
export default ShimmerCard