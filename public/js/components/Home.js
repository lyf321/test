import React from "react";
import {browserHistory} from 'react-router'

class Home extends React.Component {

    searchAllUser() {
        this.props.getAllUser();
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
                <td><span className="glyphicon glyphicon-pencil"></span> <span
                    className="glyphicon glyphicon-remove"></span></td>
            </tr>
        });

        return <div>
            <button className="btn btn-info" onClick={this.searchAllUser.bind(this)}>查询所有</button>

            <button className="btn btn-info" data-toggle="modal" data-target="#myModel">添加</button>

            <div className="modal fade" classID="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="" den="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" classID="myModalLabel">
                                添加用户
                            </h4>
                        </div>
                        <div className="modal-body">
                            在这里添加一些文本
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary">
                                提交更改
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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

export default Home;
