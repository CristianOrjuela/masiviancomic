//Design Libraries
import { notification } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

//Styles
import './message.css';

export default function openNotification(value) {
    
  let responseMessage = 'The comic has been qualified with ' + value + ' stars.';
    
    notification.open({
      message: 'Comic Qualified',
      description: responseMessage,
      icon: <CheckOutlined className="icon-style" />,
    });

};