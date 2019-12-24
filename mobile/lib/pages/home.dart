import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class MainPage extends StatefulWidget {
  MainPage({Key key, this.title}) : super(key: key);
  final String title;

  //@override
  _HomePageState createState() => _HomePageState();
//  @override
/*  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Main"),
      ),
    );
  }*/
}

class _HomePageState extends State<MainPage> {
  //page_counter = 0;
  String page = "WorldMail";
  // String _scanner, value = "";

  /* void _changeScreen(String screen) {
    setState(() {
      page = screen;
    });
  }
*/
  /*void _incrementCounter() {
    setState(() {
      page_counter++;
    });
  }*/
  String assetName = 'assets/image.svg';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
    //  backgroundColor: Colors.white,
      appBar: AppBar(
        title: Image(
          image: AssetImage("assets/logo-small.png"),
        ), //Text(page.toString()),
        centerTitle: true,
        //    centerTitle: true,
        backgroundColor: Colors.purpleAccent,
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Card(
              color: Colors.purple,
                child: Column(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 20, 12, 20),
                  child: Center(
                    child: Text(
                      "Track your package Anywhere and Everywhere!",
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 20, color: Colors.white),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 10, 12, 20),
                  child: Center(
                    child: Image(
                      image: AssetImage("assets/package.png"),
                      width: 300,
                    ),
                  ),
                ),
              ],
            )),
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 10, 12, 20),
              child: Center(
                child: TextField(
                  autofocus: false,
                  textCapitalization: TextCapitalization.words,
                  decoration: InputDecoration(
                    hintText: "SA09284231EE",
                    fillColor: Colors.white,
                    icon: Icon(const IconData(0xf3db,
                        fontFamily: CupertinoIcons.iconFont,
                        fontPackage: CupertinoIcons.iconFontPackage)),
                  ),
                ),
              ),
            ),
            Padding(
                padding: const EdgeInsets.fromLTRB(12, 40, 12, 0),
                child: Column(
                  children: <Widget>[
                    FlatButton(
                        child: Card(
                          margin: EdgeInsets.fromLTRB(0, 10, 0, 0),
                          child: Padding(
                            padding: const EdgeInsets.all(12),
                            child: Center(
                                child: Text("Packages",
                                    style: TextStyle(
                                      fontSize: 22,
                                      color: Colors.purpleAccent,
                                    ))),
                          ),
                        ),
                        onPressed: () {
                          //  _changeScreen("New screen");
                          Navigator.pushNamed(context, '/packages');
                        }),
                    FlatButton(
                      child: Card(
                        margin: EdgeInsets.fromLTRB(0, 10, 0, 0),
                        child: Padding(
                          padding: const EdgeInsets.all(12),
                          child: Center(
                              child: Text("QR Code",
                                  style: TextStyle(
                                    fontSize: 22,
                                    color: Colors.black,
                                  ))),
                        ),
                      ),
                      onPressed: () {
                        Navigator.pushNamed(context, '/qrscan');
                      },
                    ),
                    // Text(value.toString())
                  ],
                )),
          ],
        ),
      ),
    );
  }
}
