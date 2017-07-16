import React from "react";
import {browserHistory} from 'react-router'

class Home extends React.Component {

    searchAllUser() {
        this.props.getAllUser();
    }

    addUser() {
        browserHistory.push("/addUser");
    }

    deleteUser(index) {
        const user = this.props.user;
        this.props.deleteUser(user[index].userName);
    }

    updateUser(index) {
        const user = this.props.user;

        this.props.updateInf({
            userName: user[index].userName,
            name: user[index].name,
            age: user[index].userName,
            gender: user[index].age,
            phone: user[index].phone,
            email: user[index].email,
            remark: user[index].remark
        });

        browserHistory.push('/updateUser');
    }

    searchByUserName() {
        let userName = this.refs.userID.value;

        this.props.searchByUserName(userName);
    }

    componentDidUpdate() {
        if ((this.props.delStatus === 1) || (this.props.addStatus === 1) || (this.props.updateStatus === 1)) {
            this.props.getAllUser();
            this.props.updateDelStatus(0);
            this.props.updateAddStatus(0);
            this.props.updateUpdateStatus(0);
        }
    }

    render() {
        const user = this.props.user.map((ele, index)=> {
            return <tr>
                <td>{ele.userName}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.gender}</td>
                <td>{ele.phone}</td>
                <td>{ele.email}</td>
                <td>{ele.remark}</td>
                <td><span className="glyphicon glyphicon-pencil" onClick={this.updateUser.bind(this, index)}></span>
                    <span
                        className="glyphicon glyphicon-remove" onClick={this.deleteUser.bind(this, index)}></span>
                </td>
            </tr>
        });

        return <div>
            <br/>
            <br/>
            <button className="btn btn-info" onClick={this.searchAllUser.bind(this)}>查询所有用户</button>

            <button className="btn btn-info" onClick={this.addUser.bind(this)}>添加</button>
            <input type="text" ref="userID" placeholder="用户名 (001)"/>
            <button className="btn btn-info" onClick={this.searchByUserName.bind(this)}>查询</button>

            <table className="table">
                <thead>
                <tr>
                    <th>用户名</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {user}
                </tbody>
            </table>
        </div>
    }
}

export
default
Home;
