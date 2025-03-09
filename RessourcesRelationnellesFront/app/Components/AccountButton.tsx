import { useNavigate } from "react-router"

//All infos about the account, also if they are Admin or not, creation date, number of post, appreciation, if they are banned, etc...
export function AccountButton() {
    const navigate = useNavigate();

    return (
        <button
        onClick={() => navigate('/account')}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg 
                flex items-center gap-2 transition-colors duration-200"
        ></button>
        );
}