def main():
	myfile = open("experiments.txt",'wb')
	# print myfile.name
	# print dir(myfile)
	for i in range(100):
		myfile.write(str(i)+'\n')

if __name__ == '__main__':
	main()