import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import love from "../assets/love.png"
import loveFilled from "../assets/love-icon-filled.png"
import useCartStore from "../store/useCartStore";

export default function Products({ products, navigation }) {
    const dimensions = Dimensions.get('screen');
    const { favouriteItems, addFavourite,addItemToCart  } = useCartStore();
    return (
        <View className="mx-[20px]">
            <Text className="mb-[12px] text-[30px] leading-[38px]  font-normal">Recommended</Text>
            {
                products &&
                <View style={{
                    height: dimensions.height
                }}>
                    <FlatList
                        data={products}
                        numColumns={2}
                        columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
                        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
                        keyExtractor={(product) => product.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={
                                        () => navigation.navigate('Product Details', { id: `${item.id}` })
                                    }
                                    className="flex-[1] flex bg-[#F8F9FB] h-[194px] rounded-xl">

                                    <View className="flex-[1] flex bg-[#F8F9FB] items-center py-[20px] h-[194px] justify-between px-[17px] rounded-xl relative">
                                        <Image
                                            source={{ uri: item.thumbnail }}
                                            alt=""
                                            width={68}
                                            height={68}
                                            className="rounded-lg"
                                        />
                                        <View className='w-full flex flex-col gap-[4px]'>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[#1E222B] text-[14px] font-semibold leading-[20px]">₹{item.price}</Text>
                                                <TouchableOpacity
                                                    onPress={() => addItemToCart(item)}
                                                >

                                                    <View className="h-[24px] w-[24px] bg-[#2A4BA0] flex flex-col justify-center items-center rounded-full" >
                                                        <Text className="text-white">+</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </View>
                                            <Text className="text-[12px] text-[#616A7D] font-normal leading-[16px] tracking-[0.24px]">
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View className="absolute top-4 left-4">
                                            <TouchableOpacity
                                                onPress={() => addFavourite(item.id)}
                                            >
                                                {
                                                    <Image
                                                        source={favouriteItems.includes(item.id) ? loveFilled : love}
                                                        alt="Love"
                                                    />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            }
        </View>
    );

}