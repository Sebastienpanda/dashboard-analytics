import { UserInfo } from "../../types/User";

export default function HeaderDashboard({ user }: { user: UserInfo }) {
    return (
        <>
            <h1 className="h1">
                Bonjour <span className="username">{user.userInfos.firstName}</span>
            </h1>
            <p className="p">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </>
    );
}
