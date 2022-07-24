// main libraries
import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

// component
import Cropper from './CropPhoto/Cropper';

// mui
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// ac
import { setCropPhotoModal } from '../../../actionCreators/modals';
import { doneCropPhoto } from '../../../actionCreators/modals';

// utils
import { getCroppedPhoto } from './CropPhoto/cropPhotoFunctions';

const PhotoOption = (props) => {
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  // const onChangeItem = (index, event) => {
  //   setOptionValue(event.target.value);
  //   props.options[index] = event.target.value;
  //   props.setOptions(props.options);
  // };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const onSubmit = async () => {
    const { file, url } = await getCroppedPhoto(props.modal.cropPhoto[props.index].imageData.url, croppedArea);
    const photoOptions = [...props.photoOptions];
    photoOptions[props.index] = file;
    props.setPhotoOptions(photoOptions);
    // props.setCropPhotoModal(props.index, false, {});
    props.doneCropPhoto(props.index, false);
  };

  const onClose = () => {
    props.setCropPhotoModal(props.index, false, null);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.setCropPhotoModal(props.index, true, { data: file, url: URL.createObjectURL(file) });
    }
  };

  return (
    <div style={{ margin: 'auto' }}>
      <label>
        <input accept='image/*' type='file' style={{ display: 'none' }} onChange={(event) => handleChange(event)} />
        <AddPhotoAlternateIcon />
      </label>
      <Cropper
        index={props.index}
        crop={crop}
        setCrop={setCrop}
        zoom={zoom}
        setZoom={setZoom}
        onCropComplete={onCropComplete}
        croppedArea={croppedArea}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </div>
    // ここに直接、dialog cropperって入れるんじゃなくて、外でcomponentを作ったてことね。なるほど。確かにその方がいいね。
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setCropPhotoModal, doneCropPhoto })(PhotoOption);
