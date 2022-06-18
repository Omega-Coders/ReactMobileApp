import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import Svg, {
    Use,
    Image,
} from 'react-native-svg';
import { width_screen, height_screen } from './Dimensions'
const wh = (wp('1%') * hp('1%')) / 100
import Svgimg from '../imgs/boy1.svg';
const size = (width_screen * height_screen)
const Dte = ({ navigation }) => {
    return (
       
      <View style={styles.container}>
            <View style={styles.part_1}>
                <View style={styles.circleshape}></View>

            </View>
            <View style={styles.part_2}>
                <View style={styles.part_2_1}>
                    <View style={styles.csp}></View>
                </View>
                <View style={styles.part_2_2}>
                    <View>
                        <Svgimg height={hp('90%')} width={wp('90%')} />
                    </View>
                </View>

            </View>
            <View style={styles.part_3}>
                <View style={styles.pred}>
                    <Text style={styles.dt}>
                        Predefined Templates for you!..
                    </Text>
                </View>
            </View>
            <View style={styles.part_4}>

                <View style={styles.temlets}>

                </View>


            </View>
            <View style={styles.part_5}>
                <TouchableOpacity
                    style={styles.proceed}
                    onPress={() => navigation.navigate('Edging')}
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: Text_Size.Text_size_Type_0 }}>proceed</Text>
                </ TouchableOpacity>

            </View>

        </View> 



    )
}
const K_OPTIONS = [
    {
        item: 'Register No',
        id: 'JUVE',
    },
    {
        item: 'Name',
        id: 'RM',
    },
    {
        item: 'Marks',
        id: 'BR',
    },
    {
        item: 'Branch',
        id: 'PSG',
    },
    {
        item: 'Section',
        id: 'FBM',
    },
]

function App({navigation}) {
    const [selectedTeam, setSelectedTeam] = useState({})
    const [selectedTeams, setSelectedTeams] = useState([])
    return (
        <View style={{ margin: 30 }}>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={styles.container}>
                    <View style={styles.part_1}>
                        <View style={styles.circleshape}></View>
                        <View style={styles.csp}></View>
                    </View>
                    <View style={styles.part_2}>
                            <View style={styles.by}>
                                <Text style={styles.pred}>Predefined Templates for you</Text>
                            </View>
                            <View style={styles.svb}>
                                <Svgimg height={hp('110%')} width={wp('110%')} />
                            </View>
                    </View>
                    <View style={styles.part_5}>
                        <View style={styles.bn}>
                            <TouchableOpacity
                                style={styles.proceed}
                                onPress={() => navigation.navigate('Edging')}
                            >
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: Text_Size.Text_size_Type_6 }}>proceed</Text>
                            </ TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.dropdow}>
                <View style={{ height: 10 }} />
                <Text style={{ fontSize: 20, paddingBottom: 6, color: "#5364b2", fontWeight: "bold" }}>Template Components</Text>
                <SelectBox
                    label="Select Key"
                    options={K_OPTIONS}
                    selectedValues={selectedTeams}
                    onMultiSelect={onMultiChange()}
                    onTapClose={onMultiChange()}
                    isMulti
                />
            </View>
        </View>
    )

    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }

    function onChange() {
        return (val) => setSelectedTeam(val)
    }
}

export default App


//export default Dte
const styles = StyleSheet.create({
    part_1: {
        flex: 0.3

    },
    part_2: {
        flex: 0.3,
        flexDirection: 'column',
        marginTop:wp("30%"),
        //backgroundColor:"red"

    },
    part_5: {
        flex: 0.1,
        alignItems: 'center',
    },
    bn: {
        flex: 1
    },
    pred: {
      //  backgroundColor: "black",
        fontSize: Text_Size.Text_size_Type_1,
        color: "#5364b2",
        fontWeight: "800",
        fontFamily: "Inter"
    },
    proceed: {
        height: hp('7%'),
        width: wp('35%'),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: '#5364b2',
        fontStyle: 'Inter',
        marginTop: wp("128%")
    },
    dropdow: {
        marginTop: wp("103%")
    },
    svb:{
     //backgroundColor:"blue",
     flex:0.6,
     marginTop:wp("-14%"),
     marginLeft:wp("25%")
    },
    by: {
        flex:0.4,
      // backgroundColor:"violet",
        marginTop: wp("-5%"),
        marginLeft:wp("25%"),
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        //   alignItems: 'center',
        //   marginTop: 100,
        //   padding: 20
    },
    circleshape: {
    width: wh * 270,
    height: wh * 270,
    borderRadius: wh * 129,
    backgroundColor: '#5364b2',
    marginTop: wh * -90,
    marginLeft: wh * -60
    },
    part_2_2: {
        flex: 0.9,
        backgroundColor: 'green',
        marginTop: wp('38%')

    },

    /* csp: {
         
           height:hp('14%'),
           width:wp('19%'),
         // borderRadius:150/2,
         backgroundColor: '#5364b2',
         borderRadius:wp('22%'),
         backgroundColor: '#5364b2',
         marginTop:wp('-8%'),
         // marginTop:-85,
          marginLeft:wp('-4%'),
     },*/
    gup: {
        // fontFamily:'Inter',
        // fontSize:17.5,
        // marginLeft:10,
        // marginTop:3,
        // fontWeight:'Semibold',
        // color:"#353935"
    },

    xsheet: {
        //  fontSize:20,
        //  marginTop:-30,
        //  marginLeft:-89
    },
    tlin: {
        //  height:50,
        //  width:300,
        //  marginTop:18,
        //  borderWidth:1,
        //  borderColor:'black',
        //  borderRadius:20
    }
});