import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { TbWorldSearch } from "react-icons/tb";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-[#172882]">
      <div className="p-4 text-white">
        <div className="flex items-center justify-center mb-7">
          <Image src="/image/OIG1.png" width={100} height={100} />
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex gap-3 font-popin items-center p-2 rounded"
            >
              <RxDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/email-phishing"
              className="flex gap-3 font-popin items-center p-2 rounded"
            >
              <MdOutlineMarkunreadMailbox />
              Gmail Phishing Detector
            </Link>
          </li>
          <li>
            <Link
              href="/url-phishing"
              className="flex gap-3 font-popin items-center p-2 rounded"
            >
              <TbWorldSearch />
              URL Phising Detector
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
