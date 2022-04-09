from django.db import models

'''
# create table core_product (
#     id INTEGER,
#     name VARCHAR (300),
#     price NUMBER DEFAULT 0
# );
'''


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    description = models.TextField(default='')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }
