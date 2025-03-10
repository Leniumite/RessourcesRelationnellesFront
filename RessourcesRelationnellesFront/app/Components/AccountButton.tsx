import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

//All infos about the account, also if they are Admin or not, creation date, number of post, appreciation, if they are banned, etc...
export function AccountButton() {
    const navigate = useNavigate();

    return (
        <Link 
        to="/account"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
                About Page
        </Link>
        );
}