import flask
from flask import render_template, Flask, request, jsonify
import pandas as pd
from alpha_vantage.timeseries import TimeSeries
#webapp
app = Flask(__name__)

#setting the mode
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True
app.config['SECRET_KEY'] = 's200195'

#using the alpha vantage api to get stock data that updates every 5min
def alpha_vantage_timeseries(ticker):
	ts = TimeSeries(key="4RKAADTMMAZ4U000", output_format = 'pandas')

	#retreiving the stock with appropriate tickers
	data, meta_data = ts.get_intraday(symbol='NASDAQ:' + ticker,interval='5min', outputsize='full')
	data = data.rename(columns={"1. open":"open", "2. high":"high", "3. low":"low", "4. close":"close", "5. volume":"volume"})

	#testing/manipulating pandas section
	return data

#home page
@app.route("/")
def test():
	return render_template('test.html')

#retreiving the input from the page, in order to obtain the ticker name of the stock
@app.route("/data", methods=["POST"])
def getName():
	stockName = request.form['name']
	data = alpha_vantage_timeseries(stockName)

	#stockData = request.form['data']
	return jsonify({'prices': (stockName), 'open':list(data['open']), 'date':list(data.index)})

#setting debug to true
if __name__ == "__main__":
    app.run(debug=True)