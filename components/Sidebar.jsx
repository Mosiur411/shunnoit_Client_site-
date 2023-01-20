import { AiOutlineHome} from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useRouter } from 'next/router';
export default function Sidebar() {
    const router = useRouter()
    return (
        <main className='py-1 bg-white shadow  z-10 sticky top-[45px]'>
            <main className="min-w-fit p-5 shadow-2xl rounded-sm flex flex-col justify-between h-[93.1vh] ">
                {/* ================ menu styles ============  */}
                <section className="flex flex-col gap-4">
                    <div onClick={() => router.push('/')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <AiOutlineHome size={20} />
                        <span className="text-[20px]"> Dashboard</span>
                    </div>
                    <div onClick={() => router.push('/add')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <MdOutlineProductionQuantityLimits size={20} />
                        <span className="text-[20px]">Add Product</span>
                    </div>
                </section>
            </main >

        </main>
    )
}
