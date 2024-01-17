import axios from "axios";
import { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import BaseUrl from "../utils/BaseUrl";
import backArrow from "../assets/back-arrow.png";
import bagIcon from "../assets/bag-icon-black.png";
import { Rating } from 'react-native-ratings';
import Carousel from "react-native-snap-carousel";
import { PageIndicator } from "react-native-page-indicator";
import useCartStore from "../store/useCartStore";
import love from "../assets/love.png"
import loveFilled from "../assets/love-icon-filled.png"

export default function ProductDetails({ navigation, route }) {
    const width = Dimensions.get('window').width;
    const [details, setDetails] = useState(null);
    const [indexValue, setIndexValue] = useState(0);
    const { cartItems, addItemToCart, favouriteItems, addFavourite } = useCartStore();
    const id = route.params.id;
    useEffect(() => {
        axios.get(`${BaseUrl}/product/${id}`).then((res) => {
            setDetails(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    _renderItem = ({ item, index }) => {

        return (
            <View className="bg-[#F8F9FB]">
                <Image
                    style={{
                        resizeMode: 'contain',
                    }}
                    source={{ uri: item }}
                    width={width}
                    height={207}
                />
            </View>
        );
    }

    return (
        <SafeAreaView
            className="bg-white"
            edges={['right', 'left', 'top']}
        >
            {details &&
                <View>
                    <View className="mt-4 w-full px-[20px]">
                        <View className='flex flex-row justify-between mb-[21px]'>
                            <View>
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                >
                                    <Image
                                        source={backArrow}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View className="relative">
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Cart')}
                                >
                                    <Image
                                        source={bagIcon}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                    {
                                        cartItems.length > 0 &&
                                        <View className="absolute -top-4 -right-4 bg-[#F9B023] w-7 h-7 flex flex-row rounded-full border-[#fff] border-4 justify-center items-center">
                                            <Text className="text-sm text-white">{cartItems.length}</Text>
                                        </View>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="flex flex-col w-full items-start">
                            <Text
                                className="text-[50px] font-light"
                            >{details.title}</Text>
                            <Text
                                className="text-[50px] font-extrabold"
                            >{details.category}</Text>
                            <View className="flex flex-row space-x-2 my-[15.50px] items-center">
                                <Rating
                                    ratingCount={5}
                                    imageSize={20}
                                    readonly
                                    minValue={details.rating}
                                />
                                <Text className="text-sm text-[#A1A1AB] font-normal leading-[20px]">{details.rating} Rating</Text>
                            </View>
                        </View>
                    </View>
                    {/* Crousal */}
                    <View className="relative">
                        <Carousel
                            onSnapToItem={index => setIndexValue(index)}
                            ref={(c) => { this._carousel = c; }}
                            data={details.images}
                            renderItem={this._renderItem}
                            sliderWidth={width}
                            itemWidth={width}
                        />
                        <PageIndicator
                            count={details.images.length} color="#F9B023" current={indexValue}
                            className="absolute bottom-5 left-3"
                        />
                        <View className="h-[58px] w-[58px] bg-white absolute top-4 right-4 rounded-2xl flex justify-center items-center">
                            <TouchableOpacity
                                onPress={() => addFavourite(details.id)}
                            >
                                <Image
                                    style={{
                                        resizeMode: 'contain'
                                    }}
                                    className="h-6 w-6"
                                    source={favouriteItems.includes(details.id) ? loveFilled : love}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="px-[20px] flex flex-row pt-[26px] mb-[30px] gap-[14px] justify-start items-start">
                        <Text className="text-[16px] text-[#2A4BA0] font-bold ">₹{details.price}</Text>
                        <View className="px-[10px] py-[4px] bg-[#2A4BA0] rounded-full" >
                            <Text className="text-[12px] font-normal text-white" >{details.discountPercentage} OFF</Text>
                        </View>
                    </View>
                    <View className="flex flex-row justify-between w-full px-[20px] space-x-[23px]">
                        <TouchableOpacity
                            className="border border-[#2A4BA0] flex-1 py-[19px] justify-center items-center rounded-3xl"
                            onPress={() => addItemToCart(details)}
                        >
                            <Text className="text-[14px] text-[#2A4BA0] font-semibold">
                                Add To Cart
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-[#2A4BA0] flex-1 justify-center items-center rounded-3xl"
                        >
                            <Text className="text-white text-[14px] bg-[#2A4BA0] font-semibold">
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="px-[20px] mt-[30px] flex flex-col space-y-[6px]">
                        <Text className="text-[16px] font-normal text-[#1E222B]">
                            Details
                        </Text>
                        <Text className="text-[16px] text-[#8891A5] leading-[24px]">{details.description}</Text>
                    </View>
                </View>
            }
        </SafeAreaView>
    );
}