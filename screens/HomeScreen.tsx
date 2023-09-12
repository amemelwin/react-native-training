import { ScrollView, StyleSheet } from 'react-native';
import { Image,Dimensions ,FlatList,View,Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { memo } from 'react';
import { Images } from '../constants/images/Images';
export const SLIDER_WIDTH = Dimensions.get('window').width ;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const HomeScreen=()=> {
  const imgs = [
    { 
      img:Images.coffee1,
      label: "coffee1"
    },
    {
      img:Images.coffee2,
      label: "coffee2"
    },
    {
      img:Images.coffee3,
      label: "coffee3"
    },
    {
      img:Images.coffee4,
      label: "coffee4"
    },
    {
      img:Images.coffee5,
      label: "coffee5"
    },
    {
      img:Images.coffee6,
      label: "coffee6"
    },
    {
      img:Images.coffee7,
      label: "coffee7"
    },
    {
      img:Images.coffee8,
      label: "coffee8"
    },
    {
      img:Images.coffee9,
      label: "coffee9"
    }
  ]
  const CarouselData = [
    {
      id:1,
      headerText: null,
      subText: 'Sub Text One',
      image: Images.coffee1,
    },
    {
      id:2,
      headerText: 'Header Text Two',
      subText: 'Sub Text Two',
      image: Images.coffee5,
    },
    {
      id:3,
      headerText: null,
      subText: 'Sub Text Three',
      image: Images.coffee3,
    },
    {
      id:4,
      headerText: 'Header Text Four',
      subText: 'Sub Text Four',
      image: Images.coffee4,
    },
    {
      id:5,
      headerText: 'Header Text Five',
      subText: 'Sub Text Five',
      image: Images.coffee2,
    }
  ]
  
const data = [
  {id: 1, name: 'React JS', url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg'},
  {id: 2, name: 'JavaScript', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'},
  {id: 3, name: 'Node JS', url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png'},
];
  const renderItem = ({item}:any) => {
    return (
      <View
        style={{
          marginVertical:30,
          marginHorizontal:10,
          borderWidth: 1,
          borderColor:'white',
          padding: 5,
          borderRadius: 15,
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Image source={{uri: item.url}} style={{width: 100, height: 100}} />
        <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold',color:'black'}}>
          {item.name}
        </Text>
      </View>
    );
  }
  const renderPopularItem=({image,subText}:any)=>{
    return(
      <View
         style={{
          marginVertical:30,
          marginHorizontal:10,
          borderWidth: 1,
          borderColor:'gold',
          padding: 5,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <Image source={image} style={{width: 140, height: 150,borderRadius:5}} />
        <Text style={{marginVertical: 10, fontSize: 16, fontWeight: 'bold',color:'gray'}}>
          {subText}
        </Text>
      </View>
    )
  }
  return <ScrollView style={styles.mainScroll}>
    <View style={styles.container}>
    {/* <CarouselComponent/> */}
    <View style={styles.carousell}>
      <Carousel
          loop={true}
          autoplay={true}
          data={data}
          renderItem={(renderItem)}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
    </View>
    <Text>Products:</Text>
    <ScrollView horizontal={true} style={styles.imgsScrollX}>    
    {
      imgs.map(({img,label})=>{
        return <View key={Math.random()}>
          <Image
            style={styles.imgStyle}
            source={img}
          />
          <Text style={styles.imgLabel}>{label}</Text>
        </View>
      })
    }
    </ScrollView>
    <Text>Popular:</Text>
    <FlatList
      data={CarouselData}
      renderItem={({item}:any)=>renderPopularItem(item)}
      keyExtractor={(item:any) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      contentContainerStyle={{ marginHorizontal: 20 }}
    />
  </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  mainScroll:{
    backgroundColor:'',
    width:'100%',
    height:'100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  carousell: {
    width:'100%',
    flex:1
  },
  imgsScrollX: {
    // backgroundColor: 'purple',
    marginHorizontal: 40,
  },
  imgStyle:{
    borderRadius:3,
    marginHorizontal:2,
    width:100,
    height:80
  },
  imgLabel:{
    textAlign:'center',
    marginVertical:10,
    fontSize:16
  },
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
},
gridItem: {
    margin:5,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
}
});
export default memo(HomeScreen);
