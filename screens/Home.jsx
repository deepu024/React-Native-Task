import Hero from "../components/Hero";
import Search from "../components/Search";
import Coupons from "../components/Coupons";
import { SafeAreaView, ScrollView, View } from "react-native";
import Products from "../components/Products";
import { useEffect, useState } from "react";
import axios from 'axios';
import baseUrl from '../utils/BaseUrl';

export default function Home({ navigation }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(`${baseUrl}/products`).then((res) => {
            setProducts(res.data.products)
        }).catch((err) => { console.log(err); })
    });

    return (
        <SafeAreaView className="bg-[#2A4BA0]">
            <View className="bg-[#2A4BA0]">
                <View className="px-[20px]">
                    <Hero navigation={navigation} />
                    <Search />
                </View>
                <View className="bg-white">
                    <Coupons />
                    <Products products={products} navigation={navigation} />
                </View>
            </View>
        </SafeAreaView>
    );
}