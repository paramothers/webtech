import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../data/ActionCreators';
import { DataType } from '../data/Types';
import { Shop } from './shop';

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData
}

const filterProducts = (products = [], category) =>
    (!category || category === "All")
        ? products
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(

    class extends Component {
        render() {
            return <Switch>
                < Route path="/shop/products/:category?"
                    render={
                        (routeProps) =>
                            <Shop {...this.props} {...routeProps}
                                products={filterProducts(this.props.products,
                                    routeProps.match.params.category)} />
                    } />
            </Switch >
        }

        componentDidMount() {

            this.props.loadData(DataType.CATEGORIES);
            this.props.loadData(DataType.PRODUCTS);
        }
    }
)      
