import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import s from './Friends.module.css'
const Friends = () => {
	let friendsData = [
		{
			img: 'https://sun3-9.userapi.com/s/v1/ig2/oQ68kLGz4-Hj4bQzGkkelYBsFEfcOoyFrMC3HLG3eDnik3uHOWN6xWLdU47r7vcf4Wcwtt-NRd_GdtLErkZfMDpL.jpg?size=50x50&quality=96&crop=2,173,957,957&ava=1',
			id: 1,
			name: "Dmitry",
		},
		{
			img: 'https://sun3-12.userapi.com/s/v1/if1/pUiMkNBPuFuBat3ELeqSTStYAfCbEj4lUclOMt68oAmtu9A_lq21JNcrJdYeUk-e2u3Jmntm.jpg?size=50x50&quality=96&crop=1,68,900,900&ava=1',
			id: 2,
			name: "Lana",
		},
		{
			img: 'https://sun3-9.userapi.com/s/v1/ig2/oQ68kLGz4-Hj4bQzGkkelYBsFEfcOoyFrMC3HLG3eDnik3uHOWN6xWLdU47r7vcf4Wcwtt-NRd_GdtLErkZfMDpL.jpg?size=50x50&quality=96&crop=2,173,957,957&ava=1',
			id: 3,
			name: "Masha",
		},
		{
			img: 'https://sun3-8.userapi.com/s/v1/ig2/6JVzw6MJhTe4LOw08pmHqr_xTp2WUPaRmIt8Ifo-hkJ0vylLz_trzIYkt3_MJoT3QvZGH4FW0UmH_dTehTYxprUe.jpg?size=50x50&quality=96&crop=372,381,1126,1126&ava=1',
			id: 4,
			name: "Katya",
		},
		{
			img: 'https://sun3-12.userapi.com/s/v1/if1/pUiMkNBPuFuBat3ELeqSTStYAfCbEj4lUclOMt68oAmtu9A_lq21JNcrJdYeUk-e2u3Jmntm.jpg?size=50x50&quality=96&crop=1,68,900,900&ava=1',
			id: 5,
			name: "Alex",
		},
		{
			img: 'https://sun3-8.userapi.com/s/v1/ig2/6JVzw6MJhTe4LOw08pmHqr_xTp2WUPaRmIt8Ifo-hkJ0vylLz_trzIYkt3_MJoT3QvZGH4FW0UmH_dTehTYxprUe.jpg?size=50x50&quality=96&crop=372,381,1126,1126&ava=1',
			id: 6,
			name: "Sergay",
		},
	]
	let friendsElements = friendsData.map(f => <FriendItem img={f.img} name={f.name} />)
	return (
		<div>
			{friendsElements}
		</div>
	);
};

export default Friends;