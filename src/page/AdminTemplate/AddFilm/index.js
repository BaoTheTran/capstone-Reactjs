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
import { useDispatch } from 'react-redux';
import { actAddFilm  } from './duck/action';


export default function AddFilm() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [imgSrc,setImgSrc] = useState('');
  const dispatch = useDispatch();


  const formik =useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh :{},
      maphim: '',
    },
    onSubmit:(value)=>{
      console.log(value);
      value.maNhom = 'GP04';
      let formData =new FormData();

      for(let key in value){
        if(key === 'hinhAnh'){
          formData.append('File', value.hinhAnh,value.hinhAnh.name );
        }else{
          formData.append(key, value[key]);
        }
      }
      dispatch(actAddFilm(formData));
    }
  });

  const handleChangeDatePicker =(value)=>{
    let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
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

  const handleChangeFile= (event)=>{
    let file = event.target.files[0];
    if(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/jpg'){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =(event)=>{
        setImgSrc(event.target.result);
      }
      formik.setFieldValue('hinhAnh', file);
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
      <h1 className='text-warning text-center pb-3'>Thêm Mới Phim</h1>
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
                <Input name='tenPhim' onChange={formik.handleChange} />
              </Form.Item>

              <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange}/>
              </Form.Item>

              <Form.Item label="Mô Tả">
                <Input name='moTa' onChange={formik.handleChange}/>
              </Form.Item>

              <Form.Item label="Ngày Khởi Chiếu">
                <DatePicker name='ngayKhoiChieu' format={"DD/MM/YYYY"} onChange={handleChangeDatePicker}/>
              </Form.Item>
          </div>
          <div className='border border-warning border-top-0 border-right-0 border-bottom-0'>
          <Form.Item label="Đang Chiếu">
        <Switch onChange={handleChangeSwitch('dangChieu')}/>
      </Form.Item>

      <Form.Item label="Sắp Chiếu">
        <Switch onChange={handleChangeSwitch('sapChieu')} />
      </Form.Item>

      <Form.Item label="Hot">
        <Switch onChange={handleChangeSwitch('hot')}/>
      </Form.Item>
      
      <Form.Item label="Đánh Giá">
        <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10}/>
      </Form.Item>

      <Form.Item label="Hình Ảnh">
        <input type="file" onChange={handleChangeFile} 
         accept="image/png, image/jpeg, image/gif, image/jpg"/>
        <br />
        <img src={imgSrc} alt="1" style={{width:150, height:150}} />
      </Form.Item>
          </div>
      </div>
      
      <div className='text-center '>
        <button type='submit' className='btn btn-warning'>SUBMIT FILM</button>
      </div>
    </Form>
    </div>
    
  );
}
