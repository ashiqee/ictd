import Link from "next/link";
import TittleCard from "../ui/TittleCard";
import { CheckCircleOutlined } from "@ant-design/icons";


const OthersInfo = () => {
    const otherData =[
        {
            label:"দুদক হটলাইন	",
            path:""
        },
        {
            label:"৩৩৩ থেকে তথ্য-সেবা	",
            path:""
        },
        
        {
            label:"অধিদপ্তরের সাথে যোগাযোগ	",
            path:""
        },
        
        {
            label:"প্রয়োজনীয় ডাউনলোড",
            path:""
        },
        {
            label:"ডিজিটাল ল্যাব",
            path:""
        },
        {
            label:"অন্যান্য সকল ফরম",
            path:""
        },
        {
            label:"ইনোভেশন কার্যপরিধি",
            path:""
        },
        {
            label:" ইনোভেশন আইডিয়া প্রদানের ছক",
            path:""
        },
        {
            label:" ইনোভেশন টিমের সদস্যগণ",
            path:""
        },
        {
            label:" মহামারী-আপদকাল মোকাবেলায় বিশেষ পদক্ষেপের রুপরেখা",
            path:""
        },
        {
            label:"“বাংলাদেশ ই-গভর্ণমেন্ট ইআরপি (২য় সংশোধিত)” প্রকল্পের কপিরাইট সনদ",
            path:""
        },
        {
            label:"তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর এর কম্পিউটার ল্যাব ব্যবহা",
            path:""
        },
        
        
    ]
    return (
        <div className="font-kalpurush font-normal">
            <TittleCard title={"অন্যান্য সকল"}/>

            <div className="grid grid-cols-2 gap-1 mt-1">

        {
            otherData.map((data,i)=>(
                
                  <Link className="p-2 rounded-md hover:shadow-md border-[0.1px]
                hover:text-white
                hover:bg-gradient-to-l 
                hover:from-red-700 
                hover:via-red-800 
                hover:to-red-900 
                hover:bg-red-900/85
                 border-green-900 shadow-md" key={i} href={"#"}><CheckCircleOutlined />  {data.label}</Link>
                
            ))
        }
            </div>
        </div>
    );
};

export default OthersInfo;