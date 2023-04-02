import React from 'react'
import { Table, Button } from 'react-bootstrap';

import Styles from "../assest/css/listBlogs.module.css"

import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


function ListBlogs() {
    const { blogsState, categoriesState, usersState, loginState } = useSelector((state) => state);
    const navigate = useNavigate();

    let blogs = [];
    if (loginState?.user?.role === "admin") {
        blogs = blogsState?.blogs;
    } else {
        blogs = blogsState?.blogs?.filter(
            (item) => item?.userId === loginState?.user?.userId
        );
    }

    return (
        <div className={`${Styles.listBlogsWrapper} ${Styles.shadow}`}>
            <div className={Styles.btnWrapper}>
                <Button onClick={() => navigate("/admin/add-blog")} variant="primary">
                    Blog Ekle
                </Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Sıra No :</th>
                        <th>Başlık :</th>
                        <th>Kateğori :</th>
                        <th>Yazar :</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogsState?.blogs?.map((blog, index) => {
                            const category = categoriesState?.categories?.find(item => item.id === blog?.categoryId)
                            const user = usersState?.users?.find(item => item?.id === blog?.userId)
                            return (
                                <tr key={blog?.id}>
                                    <td>{index + 1}</td>
                                    <td>{blog?.title}</td>
                                    <td>{category?.name}</td>
                                    <td>{user?.username}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ListBlogs