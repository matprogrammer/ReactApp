
import { connect } from 'react-redux';
import { compose } from 'redux';
import getProduct from '../../actions/getProduct';
import { productLoading } from '../../selectors/selectors';

const mapStateToProps = (state) => ({
    productLoading: productLoading(state),
});

const mapDispatchToProps = {
    getProduct
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect);
