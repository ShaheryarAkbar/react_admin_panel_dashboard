export const userColumns = [
    {
        field: 'id', 
        headerName: 'ID', 
        width: 70,
    },
    {
        field: "user", 
        headerName:"User", 
        width: 230, 
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];

export const userRows = [
    { 
        id: 1,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'active',
        email: "asd@gmail.com",
        age: 35,
    },
    { 
        id: 2,
        username: 'John',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'pending',
        email: "asd@gmail.com",
        age: 55,
    },
    { 
        id: 3,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'active',
        email: "asd@gmail.com",
        age: 51,
    },
    { 
        id: 4,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'active',
        email: "asd@gmail.com",
        age: 42,
    },
    { 
        id: 5,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'passive',
        email: "asd@gmail.com",
        age: 31,
    },
    { 
        id: 6,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'passive',
        email: "asd@gmail.com",
        age: 31,
    },
    { 
        id: 7,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'passive',
        email: "asd@gmail.com",
        age: 31,
    },
    { 
        id: 8,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'passive',
        email: "asd@gmail.com",
        age: 31,
    },
    { 
        id: 9,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'passive',
        email: "asd@gmail.com",
        age: 31,
    },
    { 
        id: 10,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'passive',
        email: "asd@gmail.com",
        age: 31,
    },
    { 
        id: 11,
        username: 'Snow',
        img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
        status: 'passive',
        email: "asd@gmail.com",
        age: 31,
    },
]