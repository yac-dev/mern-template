// main libraries
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import EasyCrop from 'react-easy-crop';

// component
import DialogSlide from '../../../Utils/DialogSlide';

const Cropper = (props) => {
  const renderDialog = () => {
    if (props.modal.cropPhoto[props.index]) {
      return (
        <div style={{ width: '250px', height: '250px' }}>
          <DialogSlide
            modalOpen={props.modal.cropPhoto[props.index].isOpen}
            title='Crop your picture'
            onClose={props.onClose}
            onSubmit={props.onSubmit}
            style={{ sx: { width: '100%', height: 300 } }}
          >
            <div
              className='crop-container'
              style={{
                position: 'absolute',
                top: '50px',
                left: '0',
                right: '0',
                bottom: '50px',
              }}
            >
              <EasyCrop
                image={props.modal.cropPhoto[props.index].imageData.url}
                crop={props.crop}
                onCropChange={props.setCrop}
                zoom={props.zoom}
                onZoomChange={props.setZoom}
                onCropComplete={props.onCropComplete}
                aspect={1}
              />
            </div>
          </DialogSlide>
        </div>
      );
    } else {
      return null;
    }
  };

  return <>{renderDialog()}</>;
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps)(Cropper);
