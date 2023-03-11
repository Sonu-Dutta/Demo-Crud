import axios from "axios";
import React, { useEffect, useState } from "react";
// import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Link } from "react-router-dom";
import '../App.css'
import { PencilFill } from "react-bootstrap-icons";
function Home() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("http://localhost:3005/users").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:3005/users/${id}`).then(loadUsers());
  }

  return (
    <>
  <div className="w-[100vw] h-full items-center flex flex-col  px-10 py-8 main-table">
        <h1 className="text-xl font-bold mb-4">Users List</h1>

<Table>
	<Thead>
		<Tr className="bg-gray-700 text-white">
			<Th className="sno">#</Th>
			<Th>Name</Th>
			<Th style={{display:"none"}}>Username</Th>
			<Th>Email</Th>
			<Th className="phoneno">Phone </Th>
			<Th style={{display:"none"}}>Website </Th>
      <Th className="actions">Action</Th>
		</Tr>
	</Thead>
	<Tbody>
  {users.map((data, index) => (
		<Tr  key={index} className="odd:bg-gray-100 even:bg-slate-200 hover:bg-sky-100 ">
      <Td className="sno">{index+1}</Td>
			<Td >{data.name}</Td>
			<Td style={{display:"none"}}>{data.username}</Td>
			<Td className="emailadd">{data.email}</Td>
			<Td className="phoneno">{data.phone}</Td>
			<Td style={{display:"none"}}>{data.website}</Td>
      <Td className="actions"> <Link className="pencil-link"
                            to={`/edit-user/${data.id}`}
                       
                          >
                              <PencilFill      className="pencil"/>
                          </Link>
                          <Link
                            onClick={()=>deleteUser(data.id)}
                            to={"#"}
                                   >
                          <lord-icon
                                      src="https://cdn.lordicon.com/jmkrnisz.json"
                                      trigger="hover"
                                      colors="primary:#c71f16">
                                  </lord-icon>
                          </Link>
                          <Link
                            to={`/users/${data.id}`}
                                               >
                            <lord-icon
                                      src="https://cdn.lordicon.com/jxwksgwv.json"
                                      trigger="hover"
                                      colors="primary:#1663c7">
                                  </lord-icon>
                          </Link></Td>
		</Tr>
         ))}
	</Tbody>
</Table>
</div>
      {/* <div className="w-[100vw] h-full justify-center items-center flex flex-col  px-10 py-8 main-table">
        <h1 className="text-3xl font-bold">Users List</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto  sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div>
                <table className="min-w-full text-center shadow">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-2 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-2 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-2 py-4"
                      >
                       Username
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-2 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-2 py-4"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-2 py-4"
                      >
                         
                      Website
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-2 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {users.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-2 py-2 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-2 py-2 whitespace-nowrap">
                          {data.username}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-2 py-2 whitespace-nowrap">
                          {data.email}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-2 py-2 whitespace-nowrap">
                          {data.phone}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-2 py-2 whitespace-nowrap">
                          {data.website}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-2 py-2 space-x-4 whitespace-nowrap">
                         
                          <Link
                            to={`/edit-user/${data.id}`}
                            className="bg-yellow-600 text-white p-2 mb-2 rounded-circle"
                          >
                              <PencilFill/>
                          </Link>
                          <Link
                            onClick={()=>deleteUser(data.id)}
                            to={"#"}
                                   >
                          <lord-icon
                                      src="https://cdn.lordicon.com/jmkrnisz.json"
                                      trigger="hover"
                                      colors="primary:#c71f16">
                                  </lord-icon>
                          </Link>
                          <Link
                            to={`/users/${data.id}`}
                                               >
                            <lord-icon
                                      src="https://cdn.lordicon.com/jxwksgwv.json"
                                      trigger="hover"
                                      colors="primary:#1663c7">
                                  </lord-icon>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
