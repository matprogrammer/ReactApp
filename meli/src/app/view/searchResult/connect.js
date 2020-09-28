
import { connect } from 'react-redux';
import { compose } from 'redux';
import getProducts from '../../actions/getProducts';
import { productsLoading } from '../../selectors/selectors';

const mapStateToProps = (state) => ({
    productsLoading: productsLoading(state),
});

const mapDispatchToProps = {
    getProducts
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect);
