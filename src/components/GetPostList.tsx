import React, {useEffect, useState} from "react"
import Post from "../types/post.type"
import {Select} from "flowbite-react"
const GetPostList = () => {
    const [posts, setPosts] = useState<Post[] | undefined>()
    useEffect(() => {
     getPosts()
    },[])
    const getPosts = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts")
      let postList = await res?.json()
      setPosts(postList)
    }

    const filterPost = async (e: any) => {
      const id = e?.target?.value
      if(id === "all"){
       getPosts()
      }else{
        let filter_post_api = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        let filter_post = await filter_post_api?.json()
        setPosts(filter_post)
      }
    }
    return (
        <div>
            <h1 className="text-center text-3xl text-blue-600">Post List</h1>
            <div className="flex justify-end">
                <Select onChange={filterPost} className="p-2">
                    <option value="all">All</option>
                    {posts?.map((select) => {
                        return (
                            <option value={select?.id} key={select?.id}>{select?.title}</option>
                        )
                    })
                    }
                </Select>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-2">
                {posts?.map((i) => {
                    return (
                        <div style={{ border: "1px solid lightgray" }} className="p-2" key={i?.id}>
                            <h1 className="text-xl text-center text-gray-600">{i?.title}</h1>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
export default GetPostList