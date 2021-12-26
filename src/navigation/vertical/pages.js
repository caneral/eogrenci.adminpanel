import { FiFileText } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md'
import { IoIosSchool } from 'react-icons/io'
export const Pages = [
    {
        id:'anasayfa',
        title: 'Gösterge Paneli',
        path: '/',
        icon: <MdSpaceDashboard size={20}/>
    },
    {
        id:'lesson',
        title: 'Dersler',
        path:'/lessons',
        icon: <FiFileText size={20}/>
    },
    {
        id:'departments',
        title: 'Bölümler',
        path:'/departments',
        icon: <IoIosSchool size={20}/>
    }
    
];