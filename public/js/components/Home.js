import React from "react";

class Home extends React.Component {

    searchAllUser() {
        this.props.getAllUser();
    }

    render() {
        console.log(this.props.user);
        const user = this.props.user.map((ele, index)=> {
            return <div key={index}>
                <div>{ele.name}</div>
            </div>
        });

        return <div>
            <button onClick={this.searchAllUser.bind(this)}>查询所有</button>
            <button>添加</button>
            <button>修改</button>
            <button>删除</button>
            <div>{user}</div>
        </div>
    }
}

export default Home;
