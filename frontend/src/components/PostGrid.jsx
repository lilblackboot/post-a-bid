import React from 'react';

const posts = [
  { id: 1,  user: {
      name: 'Jane Smith',
      profilePicture: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
    }, image: 'https://media.istockphoto.com/id/175499936/photo/isolated-shot-of-wooden-table-on-white-background.jpg?s=612x612&w=0&k=20&c=ehujtyZnSnXVxlpzfuLwHHqMJgPJzfpLtzcmrjHsecA=', title: 'Antique Table' ,disc : 'this is a antique table',timeleft : '2 hours',currentbid : '25,000'},
  { id: 2,  user: {
      name: 'Jane Smith',
      profilePicture: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    }, image: 'https://assets.ajio.com/medias/sys_master/root/20230508/ivQe/6458f8e5d55b7d0c639c2120/-473Wx593H-466135523-pink-MODEL.jpg', title: 'Vintage Carpet',disc : 'this is a antique table',timeleft : '2 days left',currentbid : '7,00,000'} ,
  { id: 3,  user: {
      name: 'Jane Smith',
      profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6r0AZeVloAlogqFtOXnNFE2Xb-82JdXqZKg&s', title: 'cutural vas',disc : 'this is a antique table',timeleft : '3 minutes left',currentbid : '10,000' },
  // Add more posts...
];

const PostGrid = () => {
  return (
    <div className="columns-1 sm:columns-3 lg:columns-6 gap-4 p-4">
      {posts.map(post => (
        <div key={post.id} className="mb-4 bg-[#D9D9D9] rounded-xl p-5 break-inside-avoid">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg  shadow-md"
          />
          <h2 className="mt-2 bg-transparent font-bold text-xl text-gray-800">{post.title}</h2>
          <div className="flex bg-transparent items-center mb-2">
              <img
                src={post.user.profilePicture}
                alt={post.user.name}
                className="w-8 h-8 rounded-full object-cover mr-3"
              />
              <div className="bg-transparent">  
                <p className="text-sm bg-transparent font-semibold text-gray-700">{post.user.name}</p>
              </div>
            </div>
            <div className='flex  text-xs text-gray-600 justify-between bg-transparent'>
                <p className='bg-transparent'>{post.timeleft}</p>
                <p className='bg-transparent'>{post.currentbid}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
