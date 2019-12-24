import 'package:flutter/material.dart';
import '../components/packagetumb.dart';

class Packages extends StatefulWidget {
  @override
  _PackagesState createState() => _PackagesState();
}

class _PackagesState extends State<Packages> {
  List<PackageTumb> packages = [
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE"),
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE"),
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE"),
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE"),
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE"),
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE"),
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE"),
    PackageTumb(status: "Arrived", date: "today", barcode: "SA092482214EE")
  ];

  Widget packageTemplate(package) {
    return FlatButton(
      child: Card(
          margin: EdgeInsets.fromLTRB(0, 10, 0, 0),
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Text(
                  package.barcode,
                  style: TextStyle(
                      fontSize: 18.0,
                      fontWeight: FontWeight.bold,
                      color: Colors.purpleAccent),
                ),
                SizedBox(height: 6.0),
                Text(
                  'Status: ${package.status}',
                  style: TextStyle(fontSize: 17.0, color: Colors.black),
                ),
                SizedBox(height: 6.0),
                Text(
                  'Updated: ${package.date}',
                  style: TextStyle(fontSize: 15.0, color: Colors.black),
                ),
              ],
            ),
          )),
      onPressed: () {
        print("pressed");
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        title: Text("Packages"),
        centerTitle: true,
        backgroundColor: Colors.purpleAccent,
      ),
      resizeToAvoidBottomInset: false, // set it to false
      body: SingleChildScrollView(
        child: Column(
            children:
                packages.map((package) => packageTemplate(package)).toList()),
      ),
    );
  }
}
