import React from 'react';
import TopSearch from '../../components/topSearch';

 function Error() {
  return (
    <div className="body-container">
        <TopSearch />
        <div className="error-container">
            <span style={{fontWeight: 'bold', fontSize: '40px', textAlign: 'center', padding: '30px'}}>
                Ups, ocurrio un error inesperado
            </span>
            <span style={{fontSize: '14px', textAlign: 'center', paddingBottom: '30px'}}>Volvé a intentar</span>
        </div>
    </div>
  );
}

export default Error;
