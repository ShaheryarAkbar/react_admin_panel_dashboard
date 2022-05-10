import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {
  let data;

  //temporary amount
  const amount = 100;
  const diff = 20;

    switch(type) {
      case "user":
        data = {
          title:"USERS",
          isMoney: true,
          link: "See all links",
          icon: (
            <PersonOutlineOutlinedIcon 
              className="icon" 
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                color: "crimson",
              }}
            />
          ),
        };
        break;
        case "order":
        data={
          title:"ORDERS",
          isMoney: true,
          link: "See all orders",
          icon: (
            <ShoppingCartOutlinedIcon 
              className="icon" 
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenred",
              }}
            />
          ),
        };
        break;
        case "earning":
        data={
          title:"EARNINGS",
          isMoney: true,
          link: "View all earnings",
          icon: (
            <MonetizationOnOutlinedIcon 
              className="icon"
              style={{
                backgroundColor: "rgba(0, 128, 0, 0.2)",
                color: "green",
              }}
            />
          ),
        };
        break;
        case "balance":
        data={
          title:"BALANCE",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlinedIcon 
              className="icon" 
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}r</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
