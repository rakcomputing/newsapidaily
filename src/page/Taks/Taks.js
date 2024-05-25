import { Button, Input, Modal, Space, Table, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import request from "../../share/request";

const TaksApp = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setID] = useState("");
  const [idSys, setIDSys] = useState("");
  const [taksname, setTaksname] = useState("");
  const [status, setStatus] = useState("");

  const onclickAddTaks = () => {
    setVisible(true);
    setID("");
    setTaksname("");
    setStatus("");
  };

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("taks", "get", {});
    if (res) {
      console.log(res.data.result);
      setData(res.data.result);
    } else {
      console.log("Error");
    }
  };

  const columns = [
    { key: "_id", title: "ID", dataIndex: "_id" },
    {
      key: "dec",
      title: "Description",
      dataIndex: "dec",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <Space>
            <Button type="primary" onClick={() => onEditData(record)}>
              Edit
            </Button>
            <Popconfirm
              title="Delete the Post?"
              description="Are you sure to delete this post?"
              onConfirm={() => onDeleteTaks(record)}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const onEditData = (record) => {
    setVisible(true);
    setID(record.id);
    setIDSys(record._id);
    setTaksname(record.dec);
    setStatus(record.status);
  };

  const onChangeTaksname = (e) => {
    setTaksname(e.target.value);
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  const onSaveAndUpdate = async () => {
    const params = new URLSearchParams({
      _id: idSys,
      dec: taksname,
      status: status,
    });
    try {
      console.table(idSys, taksname, status);
      const method = id === "" ? "post" : "put";
      console.log("this metod: " + method);
      const res = await request("taks?" + params.toString(), method, {});

      if (res) {
        getList();
        setVisible(false);
      } else {
        console.log("Error: No response from server");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Success",
    });
  };

  const onDeleteTaks = async (record) => {
    const params = new URLSearchParams({
      _id: record._id,
    });
    console.log(idSys);
    const res = await request("taks?" + params, "delete", {});
    if (res) {
      success();
      getList();
    } else {
      console.log("Error");
    }
  };
  // const onSaveAndUpdate = async () => {
  //   const data = {
  //     id: "6",
  //     dec: taksname,
  //     status: status,
  //   };

  //   const res = await request("taks", id == "" ? "post" : "put", data);
  //   if (res) {
  //     getList();
  //     setVisible(false);
  //   } else {
  //     console.log("Error");
  //   }
  // };
  return (
    <div>
      <Button type="primary" onClick={onclickAddTaks}>
        Create Post
      </Button>
      <h3>News Feed</h3>
      <Table dataSource={data} columns={columns} rowKey="id" />
      <Modal
        title={id == "" ? "Create Post" : "Edit Post"}
        open={visible}
        footer={
          <Space>
            <Button onClick={() => setVisible(false)}>Cancel</Button>
            <Button type="primary" onClick={onSaveAndUpdate}>
              {id == "" ? "Add" : "Update"}
            </Button>
          </Space>
        }
      >
        <div>
          <Input
            value={taksname}
            onChange={onChangeTaksname}
            style={{ padding: "10px" }}
            placeholder="Input post name"
          />
          <Input
            value={status}
            onChange={onChangeStatus}
            style={{ padding: "10px", marginTop: 10 }}
            placeholder="Input status"
          />
        </div>
      </Modal>
    </div>
  );
};

export default TaksApp;
