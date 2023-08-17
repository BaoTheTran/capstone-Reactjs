import React, { useEffect, useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import {  actFetchEditFilm, actFetchUpdateFilm} from '../AddFilm/duck/action';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';


export default function EditFilm() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [imgSrc,setImgSrc] = useState('');
  const dispatch = useDispatch();
  const params = useParams();
  const dataEdit =  useSelector((state)=>state.addFilmReducer.filmEdit);
  console.log(dataEdit);

  useEffect(()=>{
    dispatch(actFetchEditFilm(params.id));
  },[])

  const formik =useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: dataEdit?.maPhim,
      tenPhim: dataEdit?.tenPhim,
      trailer: dataEdit?.trailer,
      moTa: dataEdit?.moTa,
      ngayKhoiChieu:dataEdit?.ngayKhoiChieu,
      dangChieu: dataEdit?.dangChieu,
      sapChieu: dataEdit?.sapChieu,
      hot: dataEdit?.hot,
      danhGia: dataEdit?.danhGia,
      hinhAnh :null,
    },
    onSubmit:(value)=>{
      console.log(value);
      value.maNhom = 'GP04';
      let formData =new FormData();

      for(let key in value){
        if(key !== 'hinhAnh'){
            formData.append(key, value[key]);
        }else{
            if(value.hinhAnh !== null){
                formData.append('File', value.hinhAnh,value.hinhAnh.name );
              }        
        }
      }
      dispatch(actFetchUpdateFilm(formData));
    }
  });

  const handleChangeDatePicker =(value)=>{
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue('ngayKhoiChieu',ngayKhoiChieu);
  };

  const handleChangeSwitch = (name)=>{
    return(value)=>{
      formik.setFieldValue(name, value)
    }
  };

  const handleChangeInputNumber= (name)=>{
    return(value)=>{
      formik.setFieldValue(name, value)
    }
  };

  const handleChangeFile= async(event)=>{
    let file = event.target.files[0];
    if(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/jpg'){
      await formik.setFieldValue('hinhAnh', file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =(event)=>{
        setImgSrc(event.target.result);
      }

    }
  }


  return (
    <div className='container'>
<Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 1200  ,
      }}
    >
      <h1 className='text-success text-center pb-3'>Chỉnh Sửa Phim</h1>
      <div className='d-flex justify-content-center'>
          <div className='pr-5'>
                  <Form.Item label="Form Size" name="size" >
                <Radio.Group>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Tên Phim" >
                <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim}/>
              </Form.Item>

              <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer}/>
              </Form.Item>

              <Form.Item label="Mô Tả">
                <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa}/>
              </Form.Item>

              <Form.Item label="Ngày Khởi Chiếu">
                <DatePicker name='ngayKhoiChieu' format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} 
                value={formik.values.ngayKhoiChieu ? dayjs(formik.values.ngayKhoiChieu) : undefined}
                // value = {dayjs(formik.values.ngayKhoiChieu, "DD/MM/YYYY")}
                />
              </Form.Item>
          </div>
          <div className='border border-success border-top-0 border-right-0 border-bottom-0'>
          <Form.Item label="Đang Chiếu">
        <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
      </Form.Item>

      <Form.Item label="Sắp Chiếu">
        <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu}/>
      </Form.Item>

      <Form.Item label="Hot">
        <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot}/>
      </Form.Item>
      
      <Form.Item label="Đánh Giá">
        <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia}/>
      </Form.Item>

      <Form.Item label="Hình Ảnh">
        <input type="file" onChange={handleChangeFile} 
         accept="image/png, image/jpeg, image/gif, image/jpg"/>
        <br />
        <img src={imgSrc === '' ? dataEdit?.hinhAnh : imgSrc} alt="1" style={{width:150, height:150}} />
      </Form.Item>
          </div>
      </div>
      
      <div className='text-center '>
        <button type='submit' className='btn btn-success'>SUBMIT FILM</button>
      </div>
    </Form>
    </div>
    
  );
}
