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
        id:'dersler',
        title: 'Dersler',
        path:'/about',
        icon: <FiFileText size={20}/>
    },
    {
        id:'bolumler',
        title: 'Bölümler',
        path:'/about',
        icon: <IoIosSchool size={20}/>
    }
];