import React from 'react';

const posts = [
  { id: 1, image: 'https://media.istockphoto.com/id/175499936/photo/isolated-shot-of-wooden-table-on-white-background.jpg?s=612x612&w=0&k=20&c=ehujtyZnSnXVxlpzfuLwHHqMJgPJzfpLtzcmrjHsecA=', title: 'Antique Table' ,disc : 'this is a antique table',timeleft : '2 days left',currentbid : '1000'},
  { id: 2, image: 'https://assets.ajio.com/medias/sys_master/root/20230508/ivQe/6458f8e5d55b7d0c639c2120/-473Wx593H-466135523-pink-MODEL.jpg', title: 'Vintage Carpet',disc : 'this is a antique table',timeleft : '2 days left',currentbid : '1000'} ,
  { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6r0AZeVloAlogqFtOXnNFE2Xb-82JdXqZKg&s', title: 'cutural vas',disc : 'this is a antique table',timeleft : '2 days left',currentbid : '1000' },
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
          <h2 className="mt-2 bg-transparent text-gray-700">{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
