import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import api from "../../../utils/apiUtils"
import { useFormik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actHeThongRap, actMaHeThong, taoLichChieu } from './duck/action';
import { actFetchEditFilm } from '../AddFilm/duck/action';
import dayjs from 'dayjs';


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};




export default function AddShowTime(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const dataHeThongRap = useSelector((state) => state.addShowtimeReducer.data);

  let dataCumRap = useSelector((state) => state.addShowtimeReducer.cumRap);

  const film = useSelector((state) => state.addFilmReducer.filmEdit);

  useEffect(() => {
    dispatch(actHeThongRap())
    dispatch(actFetchEditFilm(params.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: film?.maPhim,
      ngayChieuGioChieu: '',
      maRap: '',
      giaVe: '',
    },
    onSubmit: (value) => {
      console.log(value);
      dispatch(taoLichChieu(value, navigate))
    }
  })

  const handleChangeHeThongRap = (maHeThongRap) => {
    dataCumRap = dispatch(actMaHeThong(maHeThongRap))

  }


  const handleChangeCumRap = (value) => {
    formik.setFieldValue('maRap', value)
  }

  const onOk = (value) => {
    // console.log(dayjs(value).format("DD/MM/YYYY hh:mm:ss"));
    formik.setFieldValue('ngayChieuGioChieu', dayjs(value).format("DD/MM/YYYY hh:mm:ss"))
  }

  const handleChangeDate = (value) => {
    // console.log(dayjs(value).format("DD/MM/YYYY hh:mm:ss"));
    formik.setFieldValue('ngayChieuGioChieu', dayjs(value).format("DD/MM/YYYY hh:mm:ss"))
  }

  const handleChangeInputNumber = (value) => {
    formik.setFieldValue('giaVe', value)
  }

  const selectHeThongRap = () => {
    return dataHeThongRap?.map((item, index) => {
      return { label: item.tenHeThongRap, value: item.maHeThongRap }
    })
  }

  const selectCumRap = () => {
    return dataCumRap?.map((item, index) => {
      return { label: item.tenCumRap, value: item.maCumRap }
    })
  }

  return (
    <Form
      {...layout}
      name="control-ref"
      style={{
        maxWidth: 1200,
      }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h1 className='text-warning text-center pb-2'>Tạo Lịch Chiếu</h1>

      <h3 className='text-center pb-2'>Tên Phim : {film?.tenPhim}</h3>
      <Form.Item label="Hệ thống rạp">
        <Select options={selectHeThongRap()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
      </Form.Item>

      <Form.Item label="Cụm rạp">
        <Select options={selectCumRap()} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />
      </Form.Item>

      <Form.Item label="Ngày giờ chiếu">
        <DatePicker format={"DD/MM/YYYY hh:mm:ss"} showTime onChange={handleChangeDate} onOk={onOk} />
      </Form.Item>

      <Form.Item label="Giá vé">
        <InputNumber min={75000} max={200000} onChange={handleChangeInputNumber} />
      </Form.Item>



      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" >
          Khởi Tạo
        </Button>
      </Form.Item>
    </Form>
  )
}
