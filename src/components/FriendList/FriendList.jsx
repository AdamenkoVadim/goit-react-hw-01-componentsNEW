import css from "components/FriendList/FriendList.module.css"
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({friends}) => {
    return (
        <div>
            <ul className={css.friend__list}>
                {friends.map(friend => (
                    <FriendListItem
                    key = {friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                ))}
           
            </ul>
        </div>
    )
}